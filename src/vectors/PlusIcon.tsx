interface Props {
  className?: string;
}
const PlusIcon = ({ className }: Props) => {
  return (
    <svg className={className} width="800px" height="800px" viewBox="0 0 24 24">
      <path
        d="M4 12H20M12 4V20"
        stroke="#36598c"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PlusIcon;
