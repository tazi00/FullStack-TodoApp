import { Ring } from "@uiball/loaders";

function ErrorNotifier({ title = "Please wait..." }: { title: string }) {
  return (
    <div className="loading-notifier notifier">
      <div className="icon">
        <Ring size={16} lineWeight={4} speed={2} color="rgb(222, 196, 0)" />
      </div>
      <div className="text">
        <h5>{title}</h5>
      </div>
    </div>
  );
}

export default ErrorNotifier;
