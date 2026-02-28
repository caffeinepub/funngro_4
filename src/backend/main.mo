import Text "mo:core/Text";
import Map "mo:core/Map";
import List "mo:core/List";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";
import Int "mo:core/Int";
import Time "mo:core/Time";
import Order "mo:core/Order";

actor {
  type Role = {
    #teen;
    #company;
  };

  type Signup = {
    email : Text;
    role : Role;
    timestamp : Time.Time;
  };

  module Signup {
    public func compare(s1 : Signup, s2 : Signup) : Order.Order {
      Int.compare(s1.timestamp, s2.timestamp);
    };
  };

  let signups = Map.empty<Text, Signup>();

  public shared ({ caller }) func addSignup(email : Text, role : Role) : async () {
    if (signups.containsKey(email)) {
      Runtime.trap("This email is already signed up");
    };

    let signup : Signup = {
      email;
      role;
      timestamp = Time.now();
    };

    signups.add(email, signup);
  };

  public query ({ caller }) func getAllSignups() : async [Signup] {
    signups.values().toArray().sort();
  };
};
