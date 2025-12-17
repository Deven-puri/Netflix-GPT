export const checkValidEmailOnly = (email: string): string | null => {
	const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
	if (!isEmailValid) return "Email is not valid";
	return null;
};

export const checkValidNameAndPassword = (name: string, password: string): string | null => {
	const trimmedName = name.trim();
    
	const isNameValid = trimmedName.length > 0 && !/@/.test(trimmedName);
	const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);
	if (!isNameValid) return "Name is not valid";
	if (!isPasswordValid) return "Password is not valid";
	return null;
};