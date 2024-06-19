export const data = {
  Depression: {
    questions: [
      "Over the past two weeks, how often have you felt little interest or pleasure in doing things?",
      "How often have you felt down, depressed, or hopeless?",
      "How often have you had trouble falling asleep, staying asleep, or sleeping too much?",
      "How often have you felt tired or had little energy?",
      "How often have you had a poor appetite or overeaten?",
      "How often have you felt bad about yourself or that you are a failure or have let yourself or your family down?",
      "How often have you had trouble concentrating on things, such as reading the newspaper or watching television?",
      "How often have you moved or spoken so slowly that other people could have noticed? Or the opposite—being so fidgety or restless that you have been moving around a lot more than usual?",
      "How often have you thought that you would be better off dead or hurting yourself in some way?",
      "Have these problems made it difficult for you to do your work, take care of things at home, or get along with other people?",
    ],
    options: {
      A: "Nearly every day",
      B: "More than half the days",
      C: "Several days",
      D: "Not at all",
    },
    results: [
      {
        scoreRange: ">=15",
        interpretation:
          "Significant depressive symptoms. Seek professional evaluation.",
      },
      {
        scoreRange: "5-14",
        interpretation: "Mild depressive symptoms.",
      },
      {
        scoreRange: "<5",
        interpretation: "Not experiencing significant depressive symptoms.",
      },
    ],
  },

  Anxiety: {
    questions: [
      "How often have you felt nervous, anxious, or on edge in the past two weeks?",
      "How often have you been unable to stop or control worrying?",
      "How often have you worried too much about different things?",
      "How often have you had trouble relaxing?",
      "How often have you been so restless that it's hard to sit still?",
      "How often have you become easily annoyed or irritable?",
      "How often have you felt afraid as if something awful might happen?",
      "How often have you avoided situations because of your anxiety?",
      "How often have you felt as though you might lose control or 'go crazy'?",
      "How often have you experienced physical symptoms such as sweating, trembling, or a rapid heartbeat?",
    ],
    options: {
      A: "Nearly every day",
      B: "More than half the days",
      C: "Several days",
      D: "Not at all",
    },

    results: [
      {
        scoreRange: ">=15",
        interpretation:
          "Significant anxiety symptoms. Seek professional evaluation.",
      },
      {
        scoreRange: "5-14",
        interpretation: "Mild anxiety symptoms.",
      },
      {
        scoreRange: "<5",
        interpretation: "Not experiencing significant anxiety symptoms.",
      },
    ],
  },

  Bipolar_Disorder: {
    questions: [
      "Have you experienced periods where your mood was unusually elevated or irritable, lasting at least several days?",
      "During these periods of elevated mood, did you feel more self-confident than usual?",
      "Have you engaged in activities that had a high potential for painful consequences (e.g., unrestrained spending sprees, sexual indiscretions) during these periods?",
      "Did you find that you needed less sleep than usual to feel rested?",
      "Did your thoughts seem to race or did you have trouble keeping up with them?",
      "Did you talk more than usual or feel a pressure to keep talking?",
      "Did you find yourself easily distracted by unimportant things?",
      "Did you engage in an increased level of goal-directed activities (e.g., starting new projects)?",
      "Did you experience depressive episodes characterized by feelings of sadness or hopelessness?",
      "Have these mood swings affected your ability to function at work, in your social life, or at home?",
    ],
    options: {
      A: "Yes, frequently",
      B: "Occasionally",
      C: "Rarely",
      D: "No, never",
    },
    results: [
      {
        scoreRange: ">=15",
        interpretation:
          "Significant symptoms of bipolar disorder. Seek professional evaluation.",
      },
      {
        scoreRange: "5-14",
        interpretation: "Mild symptoms of bipolar disorder.",
      },
      {
        scoreRange: "<5",
        interpretation:
          "Not experiencing significant symptoms of bipolar disorder.",
      },
    ],
  },
  Schizophrenia: {
    questions: [
      "Do you hear voices or see things that others do not?",
      "Do you have beliefs or thoughts that others find unusual or bizarre?",
      "Have you experienced a significant decline in your ability to function at work, school, or in social situations?",
      "Do you feel detached from reality or believe that your thoughts are being controlled by external forces?",
      "Do you have trouble organizing your thoughts or making decisions?",
      "Do you often feel suspicious or paranoid about other people’s intentions?",
      "Have you lost interest in taking care of yourself (e.g., personal hygiene, eating properly)?",
      "Do you have trouble remembering things or concentrating on tasks?",
      "Do you feel disconnected from your emotions or find it hard to express them?",
      "Have these symptoms made it difficult for you to lead a normal life?",
    ],
    options: {
      A: "Frequently",
      B: "Occasionally",
      C: "Rarely",
      D: "Never",
    },
    results: [
      {
        scoreRange: ">=15",
        interpretation:
          "Significant symptoms of schizophrenia. Seek professional evaluation.",
      },
      {
        scoreRange: "5-14",
        interpretation: "Mild symptoms of schizophrenia.",
      },
      {
        scoreRange: "<5",
        interpretation:
          "Not experiencing significant symptoms of schizophrenia.",
      },
    ],
  },
  PTSD: {
    questions: [
      "Have you had any disturbing memories, thoughts, or images of a traumatic event in the past month?",
      "How often have you been avoiding activities or situations because they remind you of a traumatic event?",
      "How often have you felt constantly on guard, watchful, or easily startled?",
      "Have you felt numb or detached from others, activities, or your surroundings?",
      "How often have you experienced strong physical reactions when reminded of a traumatic event (e.g., heart pounding, trouble breathing, sweating)?",
      " Have you had repeated, disturbing dreams of a traumatic event?",
      " How often have you felt irritable or had angry outbursts?",
      "Have you had difficulty concentrating on tasks?",
      "How often have you felt as if the traumatic event was happening again (as if you were reliving it)?",
      "How often have you avoided thoughts or conversations about the traumatic event?",
    ],
    options: {
      A: "Yes, frequently",
      B: "Occasionally",
      C: "Rarely",
      D: "No, never",
    },
    results: [
      {
        scoreRange: ">=15",
        interpretation:
          "Significant symptoms of schizophrenia. Seek professional evaluation.",
      },
      {
        scoreRange: "5-14",
        interpretation: "Mild symptoms of PTSD.",
      },
      {
        scoreRange: "<5",
        interpretation: "Not experiencing significant symptoms of PTSD.",
      },
    ],
  },
};
