import { useEffect } from "react";
import { ErrorToast } from "./error";
import { useContextAction, useContextValue } from "@/hooks/provider";
export const Toast = () => {
  const { toast } = useContextValue();
  const dispath = useContextAction();
  useEffect(() => {
    const interval = setTimeout(() => {
      if (toast.toastState) {
        dispath({
          type: "TOAST",
          toast: { comment: "", toastState: false, color: "" },
        });
      }
    }, 2700);
    return () => clearTimeout(interval); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toast.toastState]);
  return (
    <>
      {toast.toastState && (
        <ErrorToast comment={toast.comment} color={toast.color} />
      )}
    </>
  );
};
