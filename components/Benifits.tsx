const Benefits = () => {
    const benefits = [
      { title: 'Flexible Learning', description: 'Study at your own pace, from anywhere.' },
      { title: 'Expert Teachers', description: 'Learn from industry leaders and educators.' },
      { title: 'Certification', description: 'Receive a certificate upon completing the course.' }
    ];
  
    return (
      <section className="py-16 bg-gray-100 text-gray-800">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Why Learn with Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Benefits;
  