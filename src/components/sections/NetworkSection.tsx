import Image from "next/image";
import NetworkImg from "@/public/network.svg";
import { ContentContainer } from "@/components/ContentContainer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AiOutlineMail } from "react-icons/ai";
import { Textarea } from "../ui/textarea";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const formContactSchema = z.object({
	email: z.string().email({ message: "E-mail inválido" }),
	name: z.string().min(3, { message: "Nome deve ter no mínimo 3 caracteres" }),
	message: z.string().min(10, { message: "Mensagem deve ter no mínimo 10 caracteres" }),
	cel: z.string().min(10, { message: "Celular deve ter no mínimo 8 caracteres" }),
	file: z.custom<FileList>(),
	attachment: z.string().optional(),
});

export type FormContact = z.infer<typeof formContactSchema>;

export const NetworkSection = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<FormContact>({
		resolver: zodResolver(formContactSchema),
	});

	const [isLoading, setIsLoading] = useState(false);

	async function handleSendEmail(data: FormContact) {
		setIsLoading(true);

		let form = {
			email: data.email,
			name: data.name,
			message: data.message,
			cel: data.cel,
		} as FormContact;

		const file = data?.file?.[0];

		if (file) {
			const attachment = await handleAttachment(file);
			form = {
				...form,
				attachment,
			};
		}

		const res = await axios.post("/api/email", form);

		if (res.status === 200) {
			toast.success("E-mail enviado com sucesso!");
			reset();
		} else {
			toast.error("Erro ao enviar e-mail");
		}

		setIsLoading(false);
	}

	async function handleAttachment(file: File) {
		const reader = new FileReader();

		const parsedAttachment = await new Promise<string>(resolve => {
			reader.readAsDataURL(file);

			reader.onload = e => {
				if (!e?.target?.result) return resolve("");
				const file = e.target.result as string;

				resolve(file.split(",")[1]);
			};
		});

		return parsedAttachment;
	}

	return (
		<section className="flex h-screen items-center">
			<ContentContainer className="h-full">
				<section className="grid h-full grid-cols-[repeat(auto-fill,minmax(600px,1fr))] items-center gap-32">
					<div className="h-[600px]">
						<Image alt="Network" src={NetworkImg} className="h-full w-full" />
					</div>

					<div className="h-[600px] w-[600px] space-y-6">
						<h3 className="text-5xl font-semibold">Entre em contato</h3>
						<p className="text-xl text-custom-gray-500">
							A good design is not only aesthetically pleasing, but also functional. It should be
							able to solve the problem{" "}
						</p>

						<form onSubmit={handleSubmit(handleSendEmail)} className="space-y-4">
							<div className="grid grid-cols-2 gap-4">
								<div>
									<Input placeholder="E-mail*" {...register("email")} />
									{errors.email && (
										<p className="mt-1 text-xs text-secondary">{errors.email.message}</p>
									)}
								</div>

								<div>
									<Input placeholder="Telefone*" {...register("cel")} />
									{errors.cel && (
										<p className="mt-1 text-xs text-secondary">{errors.cel.message}</p>
									)}
								</div>
							</div>

							<div>
								<Input placeholder="Nome Completo*" {...register("name")} />
								{errors.name && (
									<p className="mt-1 text-xs text-secondary">{errors.name.message}</p>
								)}
							</div>

							<div>
								<Textarea placeholder="Mensagem*" {...register("message")} />
								{errors.message && (
									<p className="mt-1 text-xs text-secondary">{errors.message.message}</p>
								)}
							</div>

							<div>
								<Input placeholder="Anexar PDF" type="file" {...register("file")} />
								{errors.file && (
									<p className="mt-1 text-xs text-secondary">{errors.file.message}</p>
								)}
							</div>

							<div className="flex w-full justify-end">
								<Button type="submit" variant="default" loading={isLoading} className="ml-auto">
									<AiOutlineMail className="mr-2 text-lg" />
									Enviar
								</Button>
							</div>
						</form>
					</div>
				</section>
			</ContentContainer>
		</section>
	);
};
