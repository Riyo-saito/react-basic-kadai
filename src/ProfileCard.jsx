import React from 'react';

export function ProfileCard({ profile, setProfile }) {
  return (
    <main>
        <div style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px'
        }}>
            <h2>{profile.name}</h2>
            <p>【年齢】{profile.age}歳</p>
            <p>【自己紹介】{profile.bio}</p>  
        </div>
    </main>
  );
}