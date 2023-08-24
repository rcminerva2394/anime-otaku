import React from 'react';

const CharacterItem = ({ data }) => {
  const { character, role, voice_actors: voiceActors } = data;

  const finalVoiceActor = voiceActors.filter(
    (actor) => actor.language === 'Japanese'
  );
  return (
    <li className='bg-zinc-100 flex p-2 justify-between dark:bg-neutral-800'>
      <div className='flex flex-column gap-x-4'>
        <img
          src={character.images.webp.image_url}
          alt={character.name}
          className='w-20 md:w-28 h-auto'
        />
        <div>
          <p className='text-sm font-medium sm:text-base'>{character.name}</p>
          <p className='text-xs sm:text-sm'>{role}</p>
        </div>
      </div>
      {finalVoiceActor.length >= 1 ? (
        <div className='flex flex-column gap-x-4'>
          <div className='self-end text-right'>
            <p className='text-sm font-medium sm:text-base'>
              {finalVoiceActor[0].person.name}
            </p>
            <p className='text-xs sm:text-sm'>{finalVoiceActor[0].language}</p>
          </div>
          <img
            src={finalVoiceActor[0].person.images.jpg.image_url}
            alt={finalVoiceActor[0].person.name}
            className='w-20 md:w-28 h-auto'
          />
        </div>
      ) : (
        ''
      )}
    </li>
  );
};

export default CharacterItem;
// ;
