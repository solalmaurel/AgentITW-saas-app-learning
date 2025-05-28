import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import { recentSessions } from "@/constants";
import React from "react";

const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>

      <section className="home-section">
        <CompanionCard
          id="123"
          name="Neura the Brainy Explorer"
          topic="Neural Network of the Brain"
          subject="science"
          duration={45}
          color="#FFB3BA"
        />
        <CompanionCard
          id="456"
          name="Histo the Time Traveler"
          topic="World History Explorer"
          subject="history"
          duration={60}
          color="#BAFFC9"
        />
        <CompanionCard
          id="789"
          name="Mathix the Number Wizard"
          topic="Mathematics Made Fun"
          subject="math"
          duration={30}
          color="#BAE1FF"
        />
      </section>

      <section className="home-section">
        <CompanionsList
          title="Recently completed sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />

        <CTA />
      </section>
    </main>
  );
};

export default Page;
