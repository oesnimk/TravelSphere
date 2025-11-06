export const aiRecommendedCourseData = {
  location: {
    city: "Seoul",
    country: "South Korea",
  },
  chatHeader: "SmartGuide AI",
  messages: [
    {
      id: 1,
      sender: "ai",
      text: "Hi traveler, let me help you with your trip!",
    },
    {
      id: 2,
      sender: "user",
      text: "남산타워에서 경복궁까지의 여행코스를 짜줘",
    },
    {
      id: 3,
      sender: "ai",
      text: "Starting your adventure at the iconic Namsan Seoul Tower is a great way to take in panoramic vistas of the city's skyline. Be sure to arrive early, especially on weekends, to avoid the crowds that form for the cable car or the walk up the wooded slopes of Namsan Park. On clear days, the observation deck rewards you with sweeping views of both modern skyscrapers and the historic palaces dotting the landscape. If you're interested in a bit of local color, check out the love locks attached to the fences—it's a fun and romantic local tradition!\n\nFor a scenic and active route to Gyeongbokgung Palace, journey down from Namsan through Myeongdong, one of Seoul's liveliest neighborhoods. Here, you can grab street snacks or browse artful shops before strolling north toward Cheonggyecheon Stream...",
      highlights: [
        "Namsan Seoul Tower",
        "Namsan Park",
        "Gyeongbokgung Palace",
        "Namsan",
        "Myeongdong",
        "Cheonggyecheon Stream",
      ],
    },
  ],
  courseCard: {
    title: "돌러보기 Gyeongbokgung Palace",
    distance: "15",
  },
  inputPlaceholder: "무엇이든 물어보세요...",
};