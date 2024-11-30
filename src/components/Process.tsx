const steps = [
  {
    number: '1',
    title: 'Discover your problem',
    description: 'Identify the core challenges by conducting in-depth analysis and brainstorming sessions. Understand the root cause to formulate actionable insights that drive meaningful solutions tailored to your unique needs.'
  },
  {
    number: '2',
    title: 'Competitive market research',
    description: 'Analyze the market landscape to uncover trends, strategies, and opportunities. Benchmark against competitors to ensure a data-driven approach for crafting innovative solutions that set you apart and drive success.'
  },
  {
    number: '3',
    title: 'User-centric design',
    description: 'Focus on creating intuitive, engaging, and functional designs that prioritize user experience. Incorporate feedback loops and usability testing to refine and deliver solutions that resonate with your audience effectively.'
  },
  {
    number: '4',
    title: 'Final hand-off',
    description: 'Ensure seamless delivery of the finalized project with comprehensive documentation and support. Provide training, resources, and follow-ups to ensure successful implementation and sustained impact of the solution.'
  }
  
];

export default function Process() {
  return (
    <div className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-40 right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-1 gap-12 relative z-10 animate__animated animate__fadeIn animate__delay-0.9s">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            My process to help<br />
            Clints
            <span className="text-pink-500"> 2x their <span className="text-blue-500"> revnue</span></span>
          </h2>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            "With over 4 years of experience in the design industry, I’ve refined this process to perfection. That’s why you can trust it completely to deliver exceptional results tailored to your needs."
          </p>
        </div>
        <div className="relative">
          <div className="space-y-4"> 
            {steps.map((step) => (
              <div
                key={step.number}
                className="group backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] hover:bg-white/20 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white flex items-center justify-center font-bold mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}