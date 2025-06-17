// import cookieParser from 'cookie-parser';
// config();
// import express from 'express';
// import { config } from 'dotenv';
// import cors from 'cors';
// import morgan from 'morgan';
// import errorMiddleware from './middlewares/error.middleware.js';

// const app = express();

// // Middlewares
// // Built-In
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// // Third-Party
// app.use(
//   cors({
//     origin: [process.env.FRONTEND_URL],
//     // origin: "https://learnity-1.vercel.app",
//     // origin: "*",
//     credentials: true,
//   })
// );

// // const allowedOrigins = [
// //   "http://localhost:3000", // local dev
// //   "https://learnity-1.vercel.app", // production
// //   "https://learnity-1-p618fvagl-manastripathi07s-projects.vercel.app", // vercel preview domain
// //   "https://learnity-1-iw2ia2cbs-manastripathi07s-projects.vercel.app"
// // ];

// // app.use(
// //   cors({
// //     origin: function (origin, callback) {
// //       if (!origin || allowedOrigins.includes(origin)) {
// //         callback(null, true);
// //       } else {
// //         callback(new Error("Not allowed by CORS"));
// //       }
// //     },
// //     credentials: true,
// //   })
// // );
// app.use(morgan('dev'));
// app.use(cookieParser());



// // Import all routes
// import userRoutes from './routes/user.routes.js';
// import courseRoutes from './routes/course.routes.js';
// import paymentRoutes from './routes/payment.routes.js';
// import miscRoutes from './routes/miscellaneous.routes.js';

// app.use('/api/v1/user', userRoutes);
// app.use('/api/v1/courses', courseRoutes);
// app.use('/api/v1/payments', paymentRoutes);
// app.use('/api/v1', miscRoutes);

// // Default catch all route - 404
// app.all('*', (_req, res) => {
//   res.status(404).send('Page Fetched Successfully');
// });

// // Custom error handling middleware
// app.use(errorMiddleware);

// export default app;

import express from 'express';
import { config } from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import morgan from 'morgan';
import errorMiddleware from './middlewares/error.middleware.js';

config(); // Load environment variables

const app = express();

// Built-In Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Enhanced CORS Setup with wildcard domain support
const allowedOriginPrefix = process.env.CORS_ORIGIN_PREFIX || 'https://learnity-1-';
const corsOptions = {
  origin: function (origin, callback) {
    const localOrigin = 'http://localhost:3000';
    const regex = /^https:\/\/learnity-1-[a-z0-9]+\.vercel\.app$/;

    if (!origin || origin === localOrigin || origin.startsWith(allowedOriginPrefix) || regex.test(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(cookieParser());

// Import all routes
import userRoutes from './routes/user.routes.js';
import courseRoutes from './routes/course.routes.js';
import paymentRoutes from './routes/payment.routes.js';
import miscRoutes from './routes/miscellaneous.routes.js';

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/courses', courseRoutes);
app.use('/api/v1/payments', paymentRoutes);
app.use('/api/v1', miscRoutes);

// Default catch-all route
app.all('*', (_req, res) => {
  res.status(404).send('Page Fetched Successfully');
});

// Error handler
app.use(errorMiddleware);

export default app;

