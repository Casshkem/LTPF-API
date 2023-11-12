# LTPF-API

> ## Step 1
>
>>Install Node.js
>>> To use the OpenAI Node.js library, you will need to ensure you have Node.js installed.
>>>To download Node.js, head to the **[official Node website](https://nodejs.org/en/download)** and download the LTS version. If you are installing Node.js for the first time, you can follow the official Node.js usage guide to get started.
>
> 
> ## Step 2
>> Install the OpenAI Node.js library
>>> ```
>>> npm install --save openai
>>> # or
>>> yarn add openai
>>> ```
>
> 
>  ## Step 3
>> ### Setup your API key for all projects (recommended)
>>>The main advantage to making your API key accessible for all projects is that our SDK will automatically detect it and use it without having to write any code.
>>> ## MacOS
>>>> Open Terminal: You can find it in the Applications folder or search for it using Spotlight (Command + Space).
>>>> Edit bash profile: Use the command nano ```~/.bash_profile``` or ```nano ~/.zshrc``` (for newer MacOS versions) to open the profile file in a text editor.
>>>> Add Environment Variable: In the editor, add the line below, ```replacing your-api-key-here``` with your actual API key:
>>>> ```
>>>> export OPENAI_API_KEY='your-api-key-here'
>>>> ```
>>>> ```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``` (my api key)
>>>> ```export OPENAI_API_KEY='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'```
>>>> Save and exit: Press Ctrl+O to write the changes, followed by Ctrl+X to close the editor.
>>>> Load your profile: Use the command source ~/.bash_profile or source ~/.zshrc to load the updated profile.
>>>> Verification: Verify the setup by typing echo $OPENAI_API_KEY in the terminal. It should display your API key.

>>> ## Windows
>>>> Open command prompt: You can find it by searching "cmd" in the start menu.
>>>> Set environment variable in the current session: To set the environment variable in the current session, use the command below, replacing your-api-key-here with your actual API key:
>>>> ```setx OPENAI_API_KEY "your-api-key-here"```
>>>> This command will set the OPENAI_API_KEY environment variable for the current session.
>>>> Permanent setup: To make the setup permanent, add the variable through the system properties as follows:
>>>> - Right-click on 'This PC' or 'My Computer' and select 'Properties'.
>>>> - Click on 'Advanced system settings'.
>>>> - Click the 'Environment Variables' button.
>>>> - In the 'System variables' section, click 'New...' and enter OPENAI_API_KEY as the variable name and your API key as the variable value.
>>>> - Verification: To verify the setup, reopen the command prompt and type the command below. It should display your ```API key: echo %OPENAI_API_KEY%```
>
> 
>  ## Step 4
>> ### Making an API request
>>> After you have Node.js configured and an API key setup, the final step is to send a request to the OpenAI API using the Node.js library. To do this, create a file named openai-test.js using the terminal or an IDE.
>>> Inside the file, copy and paste one of the examples below:
>>> ```
>>> import OpenAI from "openai";
>>>
>>> const openai = new OpenAI();
>>>
>>> async function main() {
>>>  const completion = await openai.chat.completions.create({
>>> messages: [{ role: "system", content: "You are a helpful assistant." }],
>>>  model: "gpt-3.5-turbo",
>>> });
>>> console.log(completion.choices[0]);
>>> }
>>>    main();
>>> ```
>>>>To run the code, enter node openai-test.js into the terminal / command line.
>>>>The Chat Completions example highlights just one area of strength for our models: creative ability. Explaining recursion (the programming topic) in a well formatted poem is something both the best developers and best poets would struggle with. In this case, gpt-3.5-turbo does it effortlessly.


>>
>>>
