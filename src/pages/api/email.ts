import { z } from "zod";
import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import { templateMail } from "@/constants/templateMail";

const formContactSchema = z.object({
	email: z.string().email(),
	name: z.string().min(3),
	message: z.string().min(10),
	cel: z.string().min(8),
	attachment: z.string().optional(),
	personType: z.enum(["pf", "pj"]),
});

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== "POST") {
		return res.status(405).json({ message: "Method not allowed" });
	}

	const { name, cel, email, message, attachment, personType } = formContactSchema.parse(req.body);

	const { host, port, user, pass } = {
		host: process.env.EMAIL_HOST,
		port: process.env.EMAIL_PORT,
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASS,
	};

	const transporter = nodemailer.createTransport({
		host,
		port: Number(port),
		secure: false,
		auth: {
			user,
			pass,
		},
	});

	const mailOptions = {
		from: user,
		to: user,
		subject: `Novo Contato ${personType === "pf" ? `de` : `da Empresa`} ${name} - ${email}`,
		html: templateMail({ name, message, email, cel, personType }),
		...(attachment && {
			attachments: [
				{
					filename: `${name.replaceAll(" ", "").toLowerCase()}.pdf`,
					content: attachment,
					encoding: "base64",
				},
			],
		}),
	};

	transporter.sendMail(mailOptions, error => {
		if (error) {
			res.status(500).json({ error: "Erro ao enviar e-mail." });
		} else {
			res.status(200).json({ message: "E-mail enviado com sucesso." });
		}
	});
}
