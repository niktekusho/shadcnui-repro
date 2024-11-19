import { CodeBlock } from "@/components/code-block";
import { CommandDialogTrigger } from "./command-dialog-trigger";

export default function CommandDialogPage() {
  const code = `
const CommandDialog = ({ children, ...props }: DialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="overflow-hidden p-0">
        {/* Missing title and description! */}
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
};
`;

  return (
    <main className="container mx-auto grid gap-8 leading-6 px-8 py-4">
      <h1 className="text-3xl font-semibold leading-10">
        CommandDialog is missing required children defined in Radix
      </h1>

      <section className="grid grid-cols-2 gap-4">
        <h3 className="text-xl font-bold">Demo</h3>
        <a
          className="underline underline-offset-4 place-self-center row-span-2"
          href="#"
        >
          Link to the GitHub issue
        </a>

        <CommandDialogTrigger></CommandDialogTrigger>
      </section>

      <section className="grid gap-4">
        <h3 className="text-xl font-bold">Explanation</h3>
        <p>
          CommandDialog uses{" "}
          <a
            className="underline underline-offset-4"
            href="https://www.radix-ui.com/primitives/docs/components/dialog"
          >
            <code>@radix-ui/react-dialog</code> Dialog
          </a>{" "}
          to render its content.
        </p>
        <div className="grid gap-2">
          A Radix UI Dialog requires a DialogTitle:
          <div className="grid items-center bg-red-950 text-red-500 text-md font-mono font-semibold tracking-tight px-4 py-2 rounded-md">
            <span>
              `DialogContent` requires a `DialogTitle` for the component to be
              accessible for screen reader users.
            </span>
          </div>
        </div>
        <div className="grid gap-2">
          and warns in the console if the DialogDescription is missing:
          <div className="grid items-center bg-yellow-900 text-yellow-500 text-md font-mono font-semibold tracking-tight px-4 py-2 rounded-md">
            <span>
              {
                "Missing `Description` or `aria-describedby={undefined}` for {DialogContent}."
              }
            </span>
          </div>
        </div>
      </section>

      <section className="grid gap-4">
        <h3 className="text-xl font-bold">Code</h3>

        <CodeBlock code={code} language="typescript" />
      </section>
    </main>
  );
}
