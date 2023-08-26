type Props = {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  isEdit: boolean;
};

const TextInput = (props: Props) => {
  const { label, value, onChange, isEdit } = props;

  return (
    <>
      {isEdit ? (
        <>
          <label>{label}</label>
          <textarea value={value} onChange={onChange} />
        </>
      ) : (
        <>
          <p>{label}</p>
          <p>{value}</p>
        </>
      )}
    </>
  );
};

export default TextInput;
