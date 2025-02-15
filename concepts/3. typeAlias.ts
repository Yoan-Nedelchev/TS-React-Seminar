export type NewsFeedItem =
  | {
      kind: "text";
      content: string;
    }
  | {
      kind: "video";
      source: string;
      duration: number;
    };

function handleComplexType(value: NewsFeedItem) {
  switch (value.kind) {
    case "text":
      console.log("Text content:", value.content);
      break;
    case "video":
      console.log("Video source:", value.source, "Duration:", value.duration);
      break;
  }
}

handleComplexType({
  kind: "text",
  content: "Daily news",
});
