import { FormContact } from "@/components/sections/NetworkSection";

export const templateMail = ({
	name,
	message,
	email,
	cel,
	personType,
}: Pick<FormContact, "cel" | "email" | "message" | "name" | "personType">) => {
	return `
    <p style="color: #08B3E6;">
      <strong>E-mail recebido de ${name}</strong>
    </p>
    <p>${message}</p>
    <hr />
    <p>
      <strong style="color: #08B3E6;">Dados do Remetente</strong>
    </p>
    <li>
      <strong>${personType === "collaborators" ? "Nome" : "Nome da Empresa"}:</strong> ${name}
    </li>
    <li>
      <strong>E-mail:</strong> ${email}
    </li>
    <li>
      <strong>Telefone:</strong> ${cel}
    </li>
  `;
};
