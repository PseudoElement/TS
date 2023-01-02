enum SomeEnum {
  Up = 10, ///can add custom index
  Down = 2,
  Right = 4,
  Left, //index will be the newxta after previous element - here's 5
}
SomeEnum[0]; ///Left
SomeEnum.Left; //3
enum links {
  youtube = "https://www.youtube.com/watch?v=5QnZ9AyDW6c&t=1236s&ab_channel=webDev",
  twitch = "https://www.twitch.tv/californication",
}
links.youtube;//'https://www.youtube.com/watch?v=5QnZ9AyDW6c&t=1236s&ab_channel=webDev'
links[0];//undefined
