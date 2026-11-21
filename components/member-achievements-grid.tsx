"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Globe, Mail, Phone, X } from "lucide-react";
import type { MemberAchievement } from "@/data/member-achievements";

function ContactDetails({
  achievement,
  linked = false,
}: {
  achievement: MemberAchievement;
  linked?: boolean;
}) {
  return (
    <div className="member-achievement-contact">
      {achievement.contactEmail &&
        (linked ? (
          <a href={`mailto:${achievement.contactEmail}`}>
            <Mail aria-hidden="true" size={13} />
            {achievement.contactEmail}
          </a>
        ) : (
          <span>
            <Mail aria-hidden="true" size={13} />
            {achievement.contactEmail}
          </span>
        ))}
      {achievement.contactPhone &&
        (linked ? (
          <a href={`tel:${achievement.contactPhone}`}>
            <Phone aria-hidden="true" size={13} />
            {achievement.contactPhone}
          </a>
        ) : (
          <span>
            <Phone aria-hidden="true" size={13} />
            {achievement.contactPhone}
          </span>
        ))}
      {achievement.url && (
        <span>
          <Globe aria-hidden="true" size={13} />
          {achievement.url}
        </span>
      )}
    </div>
  );
}

export default function MemberAchievementsGrid({
  achievements,
}: {
  achievements: MemberAchievement[];
}) {
  const [selectedAchievement, setSelectedAchievement] =
    useState<MemberAchievement | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (selectedAchievement && !dialog.open) {
      dialog.showModal();
    } else if (!selectedAchievement && dialog.open) {
      dialog.close();
    }
  }, [selectedAchievement]);

  return (
    <>
      <div className="member-achievements-grid">
        {achievements.map((achievement) => (
          <button
            aria-haspopup="dialog"
            className="member-achievement-card"
            key={achievement.id}
            onClick={() => setSelectedAchievement(achievement)}
            type="button"
          >
            <span className="member-achievement-photo">
              <Image
                alt=""
                fill
                sizes="(max-width: 600px) 72px, (max-width: 820px) 84px, 100px"
                src={achievement.image}
              />
            </span>
            <span className="member-achievement-copy">
              <span className="section-eyebrow">COMMUNITY CONTRIBUTOR</span>
              <span className="member-achievement-contributor">
                {achievement.contributorName}
              </span>
              <span className="member-achievement-name">
                {achievement.achievementName}
              </span>
              <span className="member-achievement-description">
                {achievement.description}
              </span>
              <ContactDetails achievement={achievement} />
            </span>
          </button>
        ))}
      </div>

      <dialog
        aria-labelledby="achievement-dialog-title"
        className="achievement-dialog"
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            event.currentTarget.close();
          }
        }}
        onClose={() => setSelectedAchievement(null)}
        ref={dialogRef}
      >
        {selectedAchievement && (
          <article className="achievement-dialog-panel">
            <button
              aria-label="Close achievement details"
              className="achievement-dialog-close"
              onClick={() => dialogRef.current?.close()}
              type="button"
            >
              <X aria-hidden="true" size={19} />
            </button>
            <div className="achievement-dialog-photo">
              <Image
                alt={`${selectedAchievement.contributorName} display picture`}
                fill
                sizes="(max-width: 600px) 100vw, 360px"
                src={selectedAchievement.image}
              />
            </div>
            <div className="achievement-dialog-copy">
              <span className="feature-eyebrow">COMMUNITY CONTRIBUTOR</span>
              <h2 id="achievement-dialog-title">
                {selectedAchievement.contributorName}
              </h2>
              <h3>{selectedAchievement.achievementName}</h3>
              <p>{selectedAchievement.description}</p>
              <ContactDetails achievement={selectedAchievement} linked />
              {selectedAchievement.url && (
                <a
                  className="achievement-dialog-link"
                  href={selectedAchievement.url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Visit achievement <Globe aria-hidden="true" size={15} />
                </a>
              )}
            </div>
          </article>
        )}
      </dialog>
    </>
  );
}
