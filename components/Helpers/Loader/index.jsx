import { BounceLoader } from "react-spinners";
const override = { display: "block", margin: "0 auto", borderColor: "red" };

export const Loader = ({ size = 100, color = "#fff", style = {} }) => {
  return (
    <BounceLoader
      color={color}
      loading={true}
      cssOverride={{ ...override, ...style }}
      size={size}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};
