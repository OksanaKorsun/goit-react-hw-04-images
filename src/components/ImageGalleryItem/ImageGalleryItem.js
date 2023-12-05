import { Item, Image } from './ImageGalleryItem.styled';
import { ImgModal } from 'components/Modal/Modal';
import { useState } from 'react';
export const ImageGalleryItem = ({image, tags, largeImage }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => 
    setIsModalOpen(true);
  
  const closeModal = () => 
    setIsModalOpen(false);
  // const toggleModal = () => {
  //   setIsModalOpen(isOpen => !isOpen)
  // };
  return (
      <>
        <Item onClick={openModal}>
          <Image src={image} alt={tags} />
        </Item>
        <ImgModal
          isOpen={isModalOpen}
          onClose={closeModal}
          tags={tags}
          image={largeImage}
        />
      </>
    );
}
