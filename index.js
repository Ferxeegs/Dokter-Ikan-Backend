import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
// import db from "./config/Database.js";  // Pastikan ini sesuai dengan konfigurasi database
import UserRoute from "./routes/UserRoute.js";
import FishTypes from "./routes/FishTypeRoute.js";
import FishExperts from "./routes/FishExpertRoute.js";
import UserConsultation from "./routes/UserConsultationRoute.js";
import FishExpertAnswer from "./routes/FishExpertAnswerRoute.js";
import Vendor from "./routes/VendorRoute.js";
import Medicine from "./routes/MedicineRoute.js";
import Consultation from "./routes/ConsultationRoute.js";
import PrescriptionRoutes from './routes/PrescriptionRoute.js';
import Payment from "./routes/PaymentRoute.js";
import PrescriptionMedicine from "./routes/PrescriptionMedicineRoute.js";
import AuthRoutes from "./routes/AuthRoutes.js";
import UploadRoute from "./routes/UploadRoute.js";
import MessageRoutes from "./routes/MessageRoutes.js";

dotenv.config();

const app = express();

// Konfigurasi session
app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false, // Ubah menjadi true jika menggunakan HTTPS
        httpOnly: true, // Menjaga keamanan cookie
        sameSite: 'none' // Pastikan bisa digunakan oleh frontend di domain berbeda
    }
}));

// Konfigurasi CORS
app.use(cors({
    credentials: true,
    origin: true  // Mengizinkan semua origin, tetapi tetap mendukung credentials
}));

app.use(express.json());

app.use('/uploads', express.static('uploads'));

// Gunakan route
app.use(UserRoute);
app.use(FishTypes);
app.use(FishExperts);
app.use(UserConsultation);
app.use(FishExpertAnswer);
app.use(Vendor);
app.use(Medicine);
app.use(Consultation);
app.use(PrescriptionRoutes);
app.use(Payment);
app.use(PrescriptionMedicine);
app.use(AuthRoutes)
app.use(UploadRoute);
app.use(MessageRoutes);


// Menjalankan server
const port = process.env.PORT || 9000;
app.listen(port, () => {
    console.log(`Server up and running on port ${port}...`);
});