import cookieParser from 'cookie-parser';
import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import errorMiddleware from './middlewares/error.middleware.js';

config();
const app = express();


// Middlewares
// Built-In
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Third-Party
// app.use(
//   cors({
//     origin: [process.env.FRONTEND_URL],
//     // origin: "https://learnity-1.vercel.app",
//     // origin: "*",
//     credentials: true,
//   })
// );

// const allowedOrigins = [
//   "http://localhost:3000", // local dev
//   "https://learnity-1.vercel.app", // production
//   "https://learnity-1-p618fvagl-manastripathi07s-projects.vercel.app", // vercel preview domain
//   "https://learnity-1-iw2ia2cbs-manastripathi07s-projects.vercel.app"
// ];

// app.use(
//   cors({
//     origin: function (origin, callback) {
//       if (!origin || allowedOrigins.includes(origin)) {
//         callback(null, true);
//       } else {
//         callback(new Error("Not allowed by CORS"));
//       }
//     },
//     credentials: true,
//   })
// );
// app.use(morgan('dev'));
// app.use(cookieParser());


app.use(
  cors({
    origin: function (origin, callback) {
      const allowed = [
        // "http://localhost:3000",
        // "https://learnity-1.vercel.app",
        "*"
      ];
      // const vercelPattern = /^https:\/\/learnity-1-[a-z0-9]+-manastripathi07s-projects\.vercel\.app$/;
      const vercelPattern = /^https:\/\/learnity-1-[\w-]+-manastripathi07s-projects\.vercel\.app$/;

      if (!origin || allowed.includes(origin) || vercelPattern.test(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);


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

// Default catch all route - 404
app.all('*', (_req, res) => {
  res.status(404).send('Page Fetched Successfully');
});

// Custom error handling middleware
app.use(errorMiddleware);

export default app;
