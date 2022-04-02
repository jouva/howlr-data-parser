# Howlr Data Parser
A JSON data parser for the now shut down furry dating/connecting mobile app Howlr

## Full readme coming soon

## Requirements
Node >= 16.0

## Instructions
```
npm install
npm run dev
# For hosting: npm run prod
```

## FAQ
### Does this store any of my data?
No it does not. It does not have any server-side processing code and is purely parsed in the user's browser. No files are sent to the server if it is hosted.

### Why are there no avatars or photos?
There are multiple reasons
1. The data and files is gone.
2. If I wished to store everybody's files before they were deleted, I would need to befriend every single user on the platform to have access to private photos as well, which would be near impossible
3. To host the files after the shutdown, I would need permission from every person that posted files to Howlr. Also near impossible and not worth it.

## Known issues
- Some JSON files may not have complete data. This is not handled by the app at this time
- Formatting of the Chat section is incomplete
- The scrollable area of the app conflicts with the chat
- The sizing of the Chat area jumps when you select various user chats
- Basically the styling needs a few last changes 

## More details

[@HowlrParser on Twitter](https://twitter.com/HowlrParser)
