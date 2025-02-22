import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { AiOutlineClose, AiOutlineHeart, AiOutlineMessage } from 'react-icons/ai';

function PostModal({ post, isOpen, onClose }) {
  if (!post) return null;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-75" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-0 md:p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full md:max-w-4xl transform bg-white shadow-xl transition-all flex flex-col md:flex-row">
                <div className="relative w-full md:w-[60%] aspect-square">
                  <img 
                    src={post.imageUrl} 
                    alt="" 
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="w-full md:w-[40%] flex flex-col">
                  <div className="p-3 md:p-4 border-b">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                      <span className="ml-3 font-semibold">username</span>
                    </div>
                  </div>

                  <div className="flex-1 p-3 md:p-4">
                    {/* Comments would go here */}
                  </div>

                  <div className="p-3 md:p-4 border-t">
                    <div className="flex space-x-4">
                      <AiOutlineHeart size={24} className="cursor-pointer" />
                      <AiOutlineMessage size={24} className="cursor-pointer" />
                    </div>
                    <div className="mt-2 font-semibold">{post.likes} likes</div>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="absolute top-2 right-2 md:top-4 md:right-4 text-white"
                >
                  <AiOutlineClose size={24} />
                </button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default PostModal;