//Defining the document result 
const queryResults = {
    0: [
        { name: "The Importance of a Balanced Diet", content: "A balanced diet is essential for maintaining good health and well-being. It provides the body with the necessary nutrients, vitamins, and minerals to function properly. A balanced diet consists of a variety of foods, including fruits, vegetables, proteins, and carbohydrates. Regular consumption of these foods can help prevent chronic diseases, improve mental health, and increase energy levels." },
        { name: "Mental Health and Wellness", content: "Mental health is just as important as physical health. It affects how individuals think, feel, and act in daily life. Common mental health issues include depression, anxiety, and stress. Maintaining good mental health requires regular relaxation, social interaction, and activities that stimulate cognitive function, such as reading or puzzles." },
        { name: "Healthy Aging: Tips for a Long and Active Life", content: "Aging is a natural process, but adopting healthy habits can help people age gracefully. Regular physical activity, a balanced diet, and mental stimulation are key factors in maintaining mobility, cognitive function, and overall health as one ages. Preventive health care, such as regular check-ups and screenings, also plays a crucial role." },
        { name: "The Benefits of Plant-Based Diets", content: "Plant-based diets, which emphasize fruits, vegetables, legumes, and grains, have been linked to lower risks of heart disease, diabetes, and certain cancers. These diets are also associated with lower levels of obesity and improved digestive health. Reducing meat consumption can also benefit the environment by lowering greenhouse gas emissions." },
        { name: "Obesity and Its Health Consequences", content: "Obesity is a major health concern that increases the risk of developing chronic diseases such as heart disease, diabetes, and certain types of cancer. Maintaining a healthy weight through regular physical activity and a balanced diet is key to preventing obesity. Public health interventions aimed at promoting healthy lifestyles are critical in addressing this global issue." }
    ],
    1: [
        { name: "Benefits of Regular Physical Exercise", content: "Engaging in regular physical activity is crucial for maintaining cardiovascular health, boosting immunity, and enhancing mental well-being. Exercise reduces the risk of chronic illnesses such as diabetes, heart disease, and stroke. Additionally, it can help regulate weight, improve muscle strength, and promote better sleep." },
        { name: "The Role of Sleep in Health", content: "Adequate sleep is a cornerstone of good health. Adults typically need 7-9 hours of sleep per night to function optimally. Lack of sleep is linked to a weakened immune system, poor mental health, and increased risk of chronic diseases such as hypertension and diabetes. Good sleep hygiene, including a regular sleep schedule and a calm sleeping environment, can significantly improve sleep quality." },
        { name: "The Dangers of Smoking", content: "Smoking is a leading cause of preventable death worldwide. It increases the risk of developing respiratory conditions like chronic obstructive pulmonary disease (COPD) and lung cancer. Quitting smoking can greatly reduce these risks and improve overall health, including better lung function and circulation." },
        { name: "The Benefits of Plant-Based Diets", content: "Plant-based diets, which emphasize fruits, vegetables, legumes, and grains, have been linked to lower risks of heart disease, diabetes, and certain cancers. These diets are also associated with lower levels of obesity and improved digestive health. Reducing meat consumption can also benefit the environment by lowering greenhouse gas emissions." },
        { name: "Healthy Aging: Tips for a Long and Active Life", content: "Aging is a natural process, but adopting healthy habits can help people age gracefully. Regular physical activity, a balanced diet, and mental stimulation are key factors in maintaining mobility, cognitive function, and overall health as one ages. Preventive health care, such as regular check-ups and screenings, also plays a crucial role." }
    ],
    2: [
        { name: "The Dangers of Smoking", content: "Smoking is a leading cause of preventable death worldwide. It increases the risk of developing respiratory conditions like chronic obstructive pulmonary disease (COPD) and lung cancer. Quitting smoking can greatly reduce these risks and improve overall health, including better lung function and circulation." },
        { name: "The Impact of Stress on Physical Health", content: "Chronic stress can lead to a host of physical health problems, including high blood pressure, heart disease, and a weakened immune system. Effective stress management techniques, such as mindfulness meditation, deep breathing exercises, and physical activity, can reduce the negative impact of stress on the body." },
        { name: "The Importance of a Balanced Diet", content: "A balanced diet is essential for maintaining good health and well-being. It provides the body with the necessary nutrients, vitamins, and minerals to function properly. A balanced diet consists of a variety of foods, including fruits, vegetables, proteins, and carbohydrates. Regular consumption of these foods can help prevent chronic diseases, improve mental health, and increase energy levels." },
        { name: "The Role of Sleep in Health", content: "Adequate sleep is a cornerstone of good health. Adults typically need 7-9 hours of sleep per night to function optimally. Lack of sleep is linked to a weakened immune system, poor mental health, and increased risk of chronic diseases such as hypertension and diabetes. Good sleep hygiene, including a regular sleep schedule and a calm sleeping environment, can significantly improve sleep quality." },
        { name: "Obesity and Its Health Consequences", content: "Obesity is a major health concern that increases the risk of developing chronic diseases such as heart disease, diabetes, and certain types of cancer. Maintaining a healthy weight through regular physical activity and a balanced diet is key to preventing obesity. Public health interventions aimed at promoting healthy lifestyles are critical in addressing this global issue." }
    ],
    3: [
        { name: "The Role of Sleep in Health", content: "Adequate sleep is a cornerstone of good health. Adults typically need 7-9 hours of sleep per night to function optimally. Lack of sleep is linked to a weakened immune system, poor mental health, and increased risk of chronic diseases such as hypertension and diabetes. Good sleep hygiene, including a regular sleep schedule and a calm sleeping environment, can significantly improve sleep quality." },
        { name: "Hydration and Its Role in Health", content: "Staying hydrated is essential for maintaining bodily functions, such as digestion, circulation, and temperature regulation. Water helps transport nutrients, remove waste, and lubricate joints. Adults are typically advised to drink around 2 liters of water per day, but individual needs may vary based on activity levels and climate." },
        { name: "The Importance of a Balanced Diet", content: "A balanced diet is essential for maintaining good health and well-being. It provides the body with the necessary nutrients, vitamins, and minerals to function properly. A balanced diet consists of a variety of foods, including fruits, vegetables, proteins, and carbohydrates. Regular consumption of these foods can help prevent chronic diseases, improve mental health, and increase energy levels." },
        { name: "Healthy Aging: Tips for a Long and Active Life", content: "Aging is a natural process, but adopting healthy habits can help people age gracefully. Regular physical activity, a balanced diet, and mental stimulation are key factors in maintaining mobility, cognitive function, and overall health as one ages. Preventive health care, such as regular check-ups and screenings, also plays a crucial role." },
        { name: "Vaccination and Public Health", content: "Vaccines play a critical role in public health by preventing the spread of infectious diseases. Immunizations have eradicated or reduced the prevalence of diseases such as polio, measles, and smallpox. Public health campaigns promoting vaccination are crucial in maintaining herd immunity and protecting vulnerable populations." }
    ],
    4: [
        { name: "The Role of Fiber in Digestive Health", content: "Dietary fiber is essential for maintaining a healthy digestive system. Fiber helps regulate bowel movements, prevent constipation, and may reduce the risk of developing diseases like colorectal cancer. High-fiber foods include fruits, vegetables, legumes, and whole grains. Adults should aim to consume 25-30 grams of fiber daily." },
        { name: "The Role of Sleep in Health", content: "Adequate sleep is a cornerstone of good health. Adults typically need 7-9 hours of sleep per night to function optimally. Lack of sleep is linked to a weakened immune system, poor mental health, and increased risk of chronic diseases such as hypertension and diabetes. Good sleep hygiene, including a regular sleep schedule and a calm sleeping environment, can significantly improve sleep quality." },
        { name: "The Connection Between Gut Health and Overall Well-being", content: "The gut microbiome, consisting of trillions of bacteria, plays a crucial role in digestion, immunity, and even mental health. A diet rich in fiber, probiotics (like yogurt), and prebiotics (like garlic and onions) supports a healthy gut. Emerging research suggests that gut health is linked to conditions such as depression, anxiety, and autoimmune diseases." },
        { name: "The Importance of a Balanced Diet", content: "A balanced diet is essential for maintaining good health and well-being. It provides the body with the necessary nutrients, vitamins, and minerals to function properly. A balanced diet consists of a variety of foods, including fruits, vegetables, proteins, and carbohydrates. Regular consumption of these foods can help prevent chronic diseases, improve mental health, and increase energy levels."},
        { name: "The Benefits of Plant-Based Diets", content: "Plant-based diets, which emphasize fruits, vegetables, legumes, and grains, have been linked to lower risks of heart disease, diabetes, and certain cancers. These diets are also associated with lower levels of obesity and improved digestive health. Reducing meat consumption can also benefit the environment by lowering greenhouse gas emissions." }
    ],
        5: [
            { name: "Vaccination and Public Health", content: "Vaccines play a critical role in public health by preventing the spread of infectious diseases. Immunizations have eradicated or reduced the prevalence of diseases such as polio, measles, and smallpox. Public health campaigns promoting vaccination are crucial in maintaining herd immunity and protecting vulnerable populations." },
            { name: "The Importance of a Balanced Diet", content: "A balanced diet is essential for maintaining good health and well-being. It provides the body with the necessary nutrients, vitamins, and minerals to function properly. A balanced diet consists of a variety of foods, including fruits, vegetables, proteins, and carbohydrates. Regular consumption of these foods can help prevent chronic diseases, improve mental health, and increase energy levels." },
            { name: "Benefits of Regular Physical Exercise", content: "Engaging in regular physical activity is crucial for maintaining cardiovascular health, boosting immunity, and enhancing mental well-being. Exercise reduces the risk of chronic illnesses such as diabetes, heart disease, and stroke. Additionally, it can help regulate weight, improve muscle strength, and promote better sleep." },
            { name: "The Impact of Stress on Physical Health", content: "Chronic stress can lead to a host of physical health problems, including high blood pressure, heart disease, and a weakened immune system. Effective stress management techniques, such as mindfulness meditation, deep breathing exercises, and physical activity, can reduce the negative impact of stress on the body." },
            { name: "Hydration and Its Role in Health", content: "Staying hydrated is essential for maintaining bodily functions, such as digestion, circulation, and temperature regulation. Water helps transport nutrients, remove waste, and lubricate joints. Adults are typically advised to drink around 2 liters of water per day, but individual needs may vary based on activity levels and climate." }
        ]
    };

function displayResults() {
    const querySelect = document.getElementById("querySelect");
    const selectedQuery = parseInt(querySelect.value); // Convert to an integer

    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ""; // Clear previous results

    // results for the selected query
    const results = queryResults[selectedQuery];

    // Checking if results exist
    if (results) {
        results.forEach(result => {
            const docName = document.createElement("h3");
            docName.textContent = result.name;

            const docContent = document.createElement("p");
            docContent.textContent = result.content;

            // Append to results div
            resultsDiv.appendChild(docName);
            resultsDiv.appendChild(docContent);
        });
    } else {
        resultsDiv.innerHTML = "<p>No results found for this query.</p>";
    }
}
