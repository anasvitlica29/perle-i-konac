type Props = {
  open: boolean;
  close: () => void;
};
export const ProductCardOverlay = ({ open, close }: Props) => {
  return (
    <div
      className={`p-3 absolute top-0 left-0 bg-background w-full h-full ${open ? "scale-y-100" : "scale-y-0"} transition-transform ease-in-out duration-500 ease-out`}
    >
      <div className="flex justify-end pt-1 pr-3">
        <button onClick={close}>x</button>
      </div>
      <div className="rounded">
        <div>This is the content</div>
      </div>
    </div>
  );
};
