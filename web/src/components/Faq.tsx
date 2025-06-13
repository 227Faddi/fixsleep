const Faq = () => {
  return (
    <section id="faq" className="py-36">
      <h2 className="text-4xl sm:text-5xl font-bold text-center pb-16">
        Questions & Answers
      </h2>
      <div className="max-w-xl space-y-2 md:space-y-8 bg-primary p-4 rounded-3xl shadow-[inset_0_0_20px_-10px_rgba(255,255,255,0.5)]">
        <div className="collapse collapse-arrow">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title font-semibold text-lg md:text-2xl">
            How do sleep cycles work?
          </div>
          <div className="collapse-content text-md md:text-lg">
            A sleep cycle lasts 90 minutes, moving through light, deep, and REM
            sleep. Waking up during light sleep helps you feel refreshed, while
            deep sleep can leave you groggy. Our app helps you wake up during
            lighter sleep for better rest.
          </div>
        </div>
        <div className="collapse collapse-arrow">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold text-lg md:text-2xl">
            When should I use the sleep cycle calculator?
          </div>
          <div className="collapse-content text-md md:text-lg">
            Use FixSleep when you want to wake up feeling refreshed. Simply
            enter your wake-up time, and the app will calculate the best sleep
            time to ensure you wake up during a light sleep phase.
          </div>
        </div>
        <div className="collapse collapse-arrow">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold text-lg md:text-2xl">
            When will the app be available?
          </div>
          <div className="collapse-content text-md md:text-lg">
            The app is already available on the App Store (iOS) and will be
            available on the Google Play Store (Android) soon.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
