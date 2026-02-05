const socketIO = require('socket.io');

let io;

exports.init = (server) => {
    io = socketIO(server, {
        cors: {
            origin: "*", // In production, restrict to frontend domain
            methods: ["GET", "POST"]
        }
    });

    io.on('connection', (socket) => {
        console.log('Client connected:', socket.id);

        // Join room for specific artifact (e.g., "solo-leveling:sung-jin-woo")
        socket.on('join_artifact', (artifactSlug) => {
            socket.join(artifactSlug);
            // Emit viewer count update (Hype Meter mock)
            const count = io.sockets.adapter.rooms.get(artifactSlug)?.size || 0;
            io.to(artifactSlug).emit('hype_update', count);
        });

        // Leave room
        socket.on('leave_artifact', (artifactSlug) => {
            socket.leave(artifactSlug);
            const count = io.sockets.adapter.rooms.get(artifactSlug)?.size || 0;
            io.to(artifactSlug).emit('hype_update', count);
        });

        socket.on('disconnect', () => {
            console.log('Client disconnected');
        });
    });

    return io;
};

exports.getIO = () => {
    if (!io) {
        throw new Error('Socket.io not initialized');
    }
    return io;
};
