# Pointer Arithmetic Cheatsheet

<!-- inline -->
## Address-Of
`&x`
**⇒** pointer to `x`

<!-- inline -->
## Indirection
`*p`
**⇒** what `p` points to

<!-- inline -->
## Comparison
`p0 < p1`
**⇒** `true` iff `p0` comes before `p1` in array

<!-- inline -->
## Difference
`p0 - p1`
**⇒** distance, in elements, `ptrdiff_t`

<!-- inline -->
## Offset
`p + offset`
**⇒** Nth pointer after/before `p`

<!-- inline -->
## Subscript
`p[offset]`
**⇒** Nth object after/before `p[0]`

<!-- inline -->
## Equivalences
```c
  &*p == p
 p[i] == *(p + i)
&p[i] == p + i
   *p == p[0]
```

<!-- inline -->
## General Advice
To better understand, you can think of pointers as memory addresses.
At a hardware level, they are indices in a huge byte array that makes up your computer's memory.

---
Note: Using the indirection operator * is called "dereferencing"<br>
Note: p + 1 will offset p by one element, which can be an offset of multiple bytes
