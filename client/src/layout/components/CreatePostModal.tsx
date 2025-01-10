import React, { useState } from 'react';

interface CreatePostModalProps {
  onClose: () => void;
}

const CreatePostModal: React.FC<CreatePostModalProps> = ({ onClose }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [caption, setCaption] = useState('');

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleShare = () => {
    console.log(selectedImage);
    console.log(caption);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg w-full max-w-4xl p-6 m-6">
        <div className="flex justify-between items-center border-b pb-4">
          <h2 className="text-xl font-bold">Create new post</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            ✕
          </button>
        </div>
        <div className="flex mt-4 flex-col md:flex-row gap-5 md:gap-0">
          <div className="w-full md:w-1/2 min-h-[300px] border rounded-lg flex items-center justify-center overflow-hidden bg-gray-100">
            {selectedImage ? (
              <img
                src={selectedImage}
                alt="Selected"
                className="object-cover h-full w-full"
              />
            ) : (
              <label className="cursor-pointer">
                <div className="flex flex-col items-center text-gray-500">
                  <span className="text-2xl">📷</span>
                  <span className="mt-2">Select an image</span>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </label>
            )}
          </div>
          <div className="w-full md:w-1/2 md:pl-4 flex flex-col justify-between">
            <textarea
              className="w-full h-full min-h-[200px] p-2 border rounded-lg resize-none focus:outline-none focus:ring focus:ring-gray-300"
              placeholder="Write a caption..."
              onChange={(e) => setCaption(e.target.value)}
            ></textarea>
            <div className="mt-4">
              <button
                className="w-full py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring focus:ring-gray-300"
                onClick={handleShare}
              >
                Share
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePostModal;
