export default function LoginInput({
    placeholder,
    value,
    onChange,
    name,
    className,
}) {
    return (
        <input
            type="text"
            className={className}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={name}
        />
    );
}
