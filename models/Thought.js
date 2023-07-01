const { Schema, model, Types } = require('mongoose'); 
const reactiontSchema = new Schema(
    {
      reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
      },
      reactionBody: {
        type: String,
        required: true,
        maxlength: 50,
        minlength: 4,
      
    },
      username: {
        type: String,
        required: true,
              },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
    {
      toJSON: {
        getters: true,
      },
      id: false,
    }
  );
  const thoughtSchema = new Schema(
    {
      thoughtText: {
        type: String,
        required: true,
      },
            
      createdAt: {
        type: Date,
        // Sets a default value of 12 weeks from now
        default: () => new Date(+new Date() + 84 * 24 * 60 * 60 * 1000),
      },
      reactions: [
       reactiontSchema

      ],
      username:{
        type: String,
        required: true
      }
    },
    {
      toJSON: {
        virtuals: true,
      },
      id: false,
    }
  );
  thoughtSchema.virtual("reactionCount").get(function() {
    return this.reactions.length;
  });
  
  const Thought = model('thought', thoughtSchema);
  
  module.exports = Thought;