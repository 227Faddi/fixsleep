const Faq = () => {
  return (
    <section id="faq" className="py-28">
      <h2 className="text-5xl font-bold text-center pb-16">FAQ</h2>
      <div className="bg-slate-400 p-4 rounded-3xl">
        <div className="collapse collapse-arrow">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title font-semibold">
            What is Fix Sleep app?
          </div>
          <div className="collapse-content text-sm">
            Fix Sleep is a mobile app designed to improve your sleep quality by
            calculating your ideal sleep cycles, sending reminders for your
            bedtime, and offering relaxing sounds to help you fall asleep.
          </div>
        </div>
        <div className="collapse collapse-arrow">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            How does the sleep cycle calculator work?
          </div>
          <div className="collapse-content text-sm">
            The calculator analyzes your preferred sleep times and gives you the
            best wake-up time based on your natural sleep cycles. This helps you
            wake up feeling refreshed and energized.
          </div>
        </div>
        <div className="collapse collapse-arrow">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            Is Fix Sleep available in other languages?
          </div>
          <div className="collapse-content text-sm">
            Right now, Fix Sleep is available in English and French to cater to
            users worldwide. We plan to add more languages in future updates.
          </div>
        </div>
        <div className="collapse collapse-arrow">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            Is the app free to use?
          </div>
          <div className="collapse-content text-sm">
            Fix Sleep offers a free version with essential features. Premium
            features, such as personalized sleep analysis and sound selections,
            are available with a subscription.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
