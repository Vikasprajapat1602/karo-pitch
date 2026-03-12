import Text "mo:core/Text";

actor {
  public query ({ caller }) func ping(text : Text) : async Text {
    text;
  };
};
