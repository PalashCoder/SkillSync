export const analyzeResume = async (file, jobDescription) => {
    // In a real app, this would call your backend API
    // For now, we'll return mock data
    return new Promise((resolve) => {
      setTimeout(() => {
        const mockResults = {
          atsScore: Math.floor(Math.random() * 30) + 70, // Random score between 70-100
          keywords: [
            "JavaScript",
            "React",
            "Node.js",
            "TypeScript",
            "REST APIs",
            "Agile",
          ],
          missingKeywords: [
            "GraphQL",
            "AWS",
            "Docker",
          ],
          optimizedResume: `
            <html>
              <body style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px;">
                <h1 style="color: #4F46E5; border-bottom: 2px solid #E5E7EB; padding-bottom: 10px;">John Doe</h1>
                <p style="color: #6B7280;">Software Engineer | john.doe@example.com | (123) 456-7890</p>
                
                <h2 style="color: #4F46E5; margin-top: 20px;">Professional Summary</h2>
                <p>Experienced Software Engineer with 5+ years of expertise in JavaScript, React, and Node.js. Proven track record of developing scalable web applications using modern technologies.</p>
                
                <h2 style="color: #4F46E5; margin-top: 20px;">Technical Skills</h2>
                <ul>
                  <li>JavaScript (ES6+), TypeScript</li>
                  <li>React, Redux, Node.js</li>
                  <li>RESTful API Development</li>
                  <li>Agile Methodologies</li>
                </ul>
                
                <h2 style="color: #4F46E5; margin-top: 20px;">Experience</h2>
                <h3 style="font-weight: bold;">Senior Software Engineer - ABC Tech (2020-Present)</h3>
                <ul>
                  <li>Led development of customer portal using React and Node.js</li>
                  <li>Improved application performance by 40% through code optimization</li>
                </ul>
              </body>
            </html>
          `,
        };
        resolve(mockResults);
      }, 1500);
    });
  };