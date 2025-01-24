type Props = {
  open: boolean;
  title: string;
  close: () => void;
};
export const ProductCardOverlay = ({ open, close, title }: Props) => {
  return (
    <div
      className={`p-3 absolute top-0 left-0 bg-background w-full h-full ${open ? "scale-y-100" : "scale-y-0"} transition-transform ease-in-out duration-500`}
    >
      <div className="flex justify-end pt-1 pr-3">
        <button onClick={close}>x</button>
      </div>
      <div className="rounded">
        <h3>
          Dodaj u korpu: <b>{title}</b>
        </h3>
        <div>This is the content</div>
      </div>
    </div>
  );
};
