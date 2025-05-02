import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import { jsPDF } from 'jspdf';

const socket = io('http://localhost:8000');

const VideoCallComponent = () => {
  const localVideo = useRef();
  const remoteVideo = useRef();
  const [transcript, setTranscript] = useState('');
  const peerConnection = useRef(null);

  useEffect(() => {
    const roomId = 'consult-room';
    socket.emit('join-room', roomId);

    const startCall = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      localVideo.current.srcObject = stream;

      peerConnection.current = new RTCPeerConnection();
      stream.getTracks().forEach(track => peerConnection.current.addTrack(track, stream));

      peerConnection.current.ontrack = event => {
        remoteVideo.current.srcObject = event.streams[0];
      };

      peerConnection.current.onicecandidate = (e) => {
        if (e.candidate) socket.emit('ice-candidate', { room: roomId, candidate: e.candidate });
      };

      socket.on('user-joined', async () => {
        const offer = await peerConnection.current.createOffer();
        await peerConnection.current.setLocalDescription(offer);
        socket.emit('offer', { room: roomId, offer });
      });

      socket.on('offer', async ({ offer }) => {
        await peerConnection.current.setRemoteDescription(new RTCSessionDescription(offer));
        const answer = await peerConnection.current.createAnswer();
        await peerConnection.current.setLocalDescription(answer);
        socket.emit('answer', { room: roomId, answer });
      });

      socket.on('answer', ({ answer }) => peerConnection.current.setRemoteDescription(new RTCSessionDescription(answer)));

      socket.on('ice-candidate', ({ candidate }) => {
        peerConnection.current.addIceCandidate(new RTCIceCandidate(candidate));
      });
    };

    startCall();
    startSpeechToText();
  }, []);

  const startSpeechToText = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.onresult = (e) => {
      const speech = Array.from(e.results).map(r => r[0].transcript).join('');
      setTranscript(speech);
    };
    recognition.start();
  };

  const downloadTranscript = () => {
    const pdf = new jsPDF();
    pdf.text(transcript, 10, 10);
    pdf.save('consultation_transcript.pdf');
  };

  return (
    <div className="p-6 flex flex-col items-center">
      <div className="flex gap-6 mb-6">
        <video ref={localVideo} autoPlay muted className="w-60 rounded-xl shadow-lg" />
        <video ref={remoteVideo} autoPlay className="w-60 rounded-xl shadow-lg" />
      </div>
      <button onClick={downloadTranscript} className="btn-primary">Download Transcript</button>
      <textarea value={transcript} className="w-full mt-4 p-4 h-40 border rounded-lg" readOnly />
    </div>
  );
};

export default VideoCallComponent;
