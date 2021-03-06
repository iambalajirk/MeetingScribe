const messages = class Messages {
   static taskAdded(params) {
     return {
       "fulfillmentMessages": [
         {
           "platform": "ACTIONS_ON_GOOGLE",
           "simpleResponses": {
             "simpleResponses": [
               {
                 "displayText": `Assigned the task ${params.task} to ${params.user}`,
                 "ssml": `<speak>Assigned <break time="40ms"/> ${params.task} to <break time="40ms"/>${params.user}</speak>`
               }
             ]
           }
         }
       ]
     }
   }

   static meetingStarted(params) {
     return {
       "fulfillmentMessages": [
         {
           "platform": "ACTIONS_ON_GOOGLE",
           "simpleResponses": {
             "simpleResponses": [
               {
                 "displayText": `Started scribing ${params.meeting_name}`,
                 "ssml": `<speak> Started scribing <break time="40ms"/> ${params.meeting_name} </speak>`
               }
             ]
           }
         }
       ]
     }
   }

   static meetingConcluded(params) {
     return {
       "fulfillmentMessages": [
         {
           "platform": "ACTIONS_ON_GOOGLE",
           "simpleResponses": {
             "simpleResponses": [
               {
                 "displayText": `Meeting ${params.meeting_name} concluded`,
                 "ssml": `<speak>Meeting <break time="40ms"/> ${params.meeting_name} is completed and the tasks are added to ${params.output || 'confluence'}. </speak>`
               }
             ]
           }
         }
       ]
     }
   }

   static timeLeft(params) {

   }

   static timeBoxing(params) {
      return {
       "fulfillmentMessages": [
         {
           "platform": "ACTIONS_ON_GOOGLE",
           "simpleResponses": {
             "simpleResponses": [
               {
                 "displayText": `Time boxing ${params.conversation} for ${params.time} `,
                 "ssml": `<speak>Time boxing ${params.conversation} for <break time="40ms"/>${params.time} </speak>`
               }
             ]
           }
         }
       ]
     }
   }

   static customTimeboxing(conversation) {
     return {
       "fulfillmentMessages": [
         {
           "platform": "ACTIONS_ON_GOOGLE",
           "simpleResponses": {
             "simpleResponses": [
               {
                 "displayText": `Time boxing for ${conversation} is completed.`,
                 "ssml": `<speak>Time boxing for ${conversation} is completed.</speak>`
               }
             ]
           }
         }
       ]
     }
   }

   static ccEmail(params) {
     return {
       "fulfillmentMessages": [
         {
           "platform": "ACTIONS_ON_GOOGLE",
           "simpleResponses": {
             "simpleResponses": [
               {
                 "displayText": `Sent meeting details as email to ${params.email}`,
                 "ssml": `<speak>Sent meeting details as email to <break time="40ms"/> ${params.email}</speak>`
               }
             ]
           }
         }
       ]
     }
   }

   static noteAdded(params) {
      return {
        "fulfillmentMessages": [
          {
            "platform": "ACTIONS_ON_GOOGLE",
            "simpleResponses": {
              "simpleResponses": [
                {
                  "displayText": `Done`,
                  "ssml": `<speak> Done </speak>`
                }
              ]
            }
          }
        ]
      }
   }

   static emailSent() {
      return {
        "fulfillmentMessages": [
          {
            "platform": "ACTIONS_ON_GOOGLE",
            "simpleResponses": {
              "simpleResponses": [
                {
                  "displayText": `Sent MoM to all meeting attendees`,
                  "ssml": `<speak> Sent email to all meeting attendees </speak>`
                }
              ]
            }
          }
        ]
      }
   }

   static unKnownIntent() {
     return {
       "fulfillmentMessages": [
         {
           "platform": "ACTIONS_ON_GOOGLE",
           "simpleResponses": {
             "simpleResponses": [
               {
                 "displayText": `Couldn't identify your request. Please try again`,
                 "ssml": `Couldn't identify your request. Please try again`
               }
             ]
           }
         }
       ]
     }
   }

  static NoEvents() {
    return {
      "fulfillmentMessages": [
        {
          "platform": "ACTIONS_ON_GOOGLE",
          "simpleResponses": {
            "simpleResponses": [
              {
                "displayText": `There are no google calendar invites currently. Please create one`,
                "ssml": `There are no google calendar invites currently. Please create one`
              }
            ]
          }
        }
      ]
    }
  }

};

module.exports = messages;