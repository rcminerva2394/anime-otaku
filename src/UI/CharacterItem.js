import React from 'react';

const CharacterItem = ({ data }) => {
  const { character, role, voice_actors: voiceActors } = data;

  const finalVoiceActor = voiceActors.filter(
    (actor) => actor.language === 'Japanese'
  );
  return (
    <li class='bg-zinc-100 flex p-3 justify-between'>
      <div class='flex flex-column gap-x-4'>
        <img
          src={character.images.webp.image_url}
          alt={character.name}
          class='w-28 h-auto'
        />
        <div>
          <p>{character.name}</p>
          <p class='font-light'>{role}</p>
        </div>
      </div>
      {finalVoiceActor.length >= 1 ? (
        <div class='flex flex-column gap-x-4'>
          <div class='self-end text-right'>
            <p>{finalVoiceActor[0].person.name}</p>
            <p class='font-light'>{finalVoiceActor[0].language}</p>
          </div>
          <img
            src={finalVoiceActor[0].person.images.jpg.image_url}
            alt={finalVoiceActor[0].person.name}
            class='w-28 h-auto'
          />
        </div>
      ) : (
        ''
      )}
    </li>
  );
};

export default CharacterItem;
