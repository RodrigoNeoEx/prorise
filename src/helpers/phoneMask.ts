export const phoneMask = (value: string) => {
	const maxLength = 15;

	if (!value) return "";

	value = value.slice(0, maxLength);
	value = value.replace(/\D/g, "");
	value = value.replace(/(\d{2})(\d)/, "($1) $2");
	value = value.replace(/(\d)(\d{4})$/, "$1-$2");

	return value;
};
