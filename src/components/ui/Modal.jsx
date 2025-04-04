import { Dialog } from "@headlessui/react";




export default function Modal({ isOpen, setIsOpen, title, children }) {
  function close() {
    setIsOpen(false);
  }

  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
        __demoMode
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Dialog.Panel
              transition
              className="w-full max-w-lg rounded-xl bg-white/60 backdrop-blur-sm p-6  duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <Dialog.Title
                as="h3"
                className="text-base/7 font-medium"
              >
                {title}
              </Dialog.Title>
              {children}
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
