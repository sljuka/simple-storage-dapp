import dynamic from "next/dynamic";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const NoSSR = (props: Props) => (
  <React.Fragment>{props.children}</React.Fragment>
);
export default dynamic(() => Promise.resolve(NoSSR), {
  ssr: false,
});
