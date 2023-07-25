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
import { Field } from "../Field";
import { phoneMask } from "@/helpers/phoneMask";
import { Label } from "../ui/label";

const formContactSchema = z.object({
	email: z.string().email({ message: "E-mail inválido" }),
	name: z.string().min(3, { message: "Nome deve ter no mínimo 3 caracteres" }),
	message: z.string().min(10, { message: "Mensagem deve ter no mínimo 10 caracteres" }),
	cel: z.string().min(10, { message: "Telefone deve ter no mínimo 8 caracteres" }),
	file: z
		.custom<FileList>()
		.optional()
		.refine(
			files => "application/pdf" === files?.[0]?.type || files?.length === 0,
			"Apenas arquivos PDF são aceitos"
		),

	personType: z.enum(["collaborators", "commercial"]),

	attachment: z.string().optional(),
});

export type FormContact = z.infer<typeof formContactSchema>;

export const NetworkSection = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		watch,
	} = useForm<FormContact>({
		resolver: zodResolver(formContactSchema),
		defaultValues: {
			personType: "commercial",
		},
	});

	const [isLoading, setIsLoading] = useState(false);

	async function handleSendEmail(data: FormContact) {
		setIsLoading(true);

		let form = {
			email: data.email,
			name: data.name,
			message: data.message,
			cel: data.cel,
			personType: data.personType,
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

	const watchpersonType = watch("personType", "commercial");

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
		<section id="network" className="mb-20 flex h-screen items-center sm:min-h-screen">
			<ContentContainer className="h-full">
				<section className="grid h-full grid-cols-none items-center gap-32 sm:grid-cols-1 lg:grid-cols-2">
					<div className="order-2 hidden h-[500px] sm:block lg:order-1">
						<Image
							alt="Network"
							src={NetworkImg}
							draggable="false"
							className="h-full w-full animate-pulse"
						/>
					</div>

					<div className="order-1 mx-auto min-w-[300px] max-w-[600px]  space-y-6 lg:order-2 lg:h-[500px]">
						<h3 className="text-3xl font-semibold sm:text-5xl">Entre em contato</h3>
						<p className="text-base text-dark-400 sm:text-xl">
							{watchpersonType === "collaborators"
								? "Cadastre seu currículo e venha fazer parte do nosso tive de devs."
								: "Compartilhe suas necessidades, ideias e desafios conosco através deste formulário de contato."}
						</p>

						<form onSubmit={handleSubmit(handleSendEmail)} className="space-y-4">
							<div className="flex gap-3">
								<div className="flex items-center space-x-2">
									<Label className="flex gap-2">
										<input
											type="radio"
											value="commercial"
											{...register("personType")}
											className="h-4 w-4 border-dark-400 bg-transparent text-primary outline-none ring-0 focus:ring-black"
										/>
										Comercial
									</Label>
								</div>
								<div className="flex items-center space-x-2">
									<Label className="flex gap-2">
										<input
											type="radio"
											value="collaborators"
											{...register("personType")}
											className="h-4 w-4 border-dark-400 bg-transparent text-primary outline-none ring-0 focus:ring-black"
										/>
										Colaboradores
									</Label>
								</div>
							</div>

							<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
								<Field error={errors.email}>
									<Input placeholder="E-mail*" {...register("email")} />
								</Field>

								<Field error={errors.cel}>
									<Input
										placeholder="Telefone*"
										{...register("cel")}
										onChange={({ target }) => {
											target.value = phoneMask(target.value);
										}}
									/>
								</Field>
							</div>

							<Field error={errors.name}>
								<Input
									placeholder={
										watchpersonType === "collaborators" ? "Nome Completo*" : "Nome da Empresa*"
									}
									{...register("name")}
								/>
							</Field>

							<Field error={errors.message}>
								<Textarea placeholder="Mensagem*" {...register("message")} />
							</Field>

							<Field error={errors.file}>
								<Input
									placeholder="Anexar PDF"
									type="file"
									{...register("file")}
									accept="application/pdf"
								/>
							</Field>

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
