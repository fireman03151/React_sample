---
title: Finally
---

## finally
The finally block always executes when the try block exits. This ensures that the finally block is executed even if an unexpected exception occurs. But finally is useful for more than just exception handling — it allows the programmer to avoid having cleanup code accidentally bypassed by a return, continue, or break. Putting cleanup code in a finally block is always a good practice, even when no exceptions are anticipated.

***Example:***
```java
try {
   // Normal execution path
   throw new EmptyStackException();
} catch (ExampleException ee) {
   //  deal with the ExampleException
} finally {
   // This optional section is executed upon termination of any of the try or catch blocks above, 
   //  except when System.exit() is called in "try" or "catch" blocks;
}
```

The finally block does not need the catch block to precede it.There can also be a finally block without the catch block.

***Example:***
```java
try {
   //Normal code
     System.out.println("hello world!");
} finally {
   System.out.println("In finally block");
}
```

The above code works fine even though the catch statement is not used.
