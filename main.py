from collections import deque

class DequeDS:
    def __init__(self):
        self.deq = deque()

    def add_front(self, item):
        self.deq.appendleft(item)

    def add_rear(self, item):
        self.deq.append(item)

    def remove_front(self):
        if not self.deq:
            print("Deque empty!")
            return None
        return self.deq.popleft()

    def remove_rear(self):
        if not self.deq:
            print("Deque empty!")
            return None
        return self.deq.pop()

    def front(self):
        if not self.deq:
            print("Deque empty!")
            return None
        return self.deq[0]

    def rear(self):
        if not self.deq:
            print("Deque empty!")
            return None
        return self.deq[-1]

    def show(self):
        print("Deque:", list(self.deq))


def main():
    d = DequeDS()

    while True:
        print("\n1.Add Front  2.Add Rear  3.Remove Front  4.Remove Rear")
        print("5.Peek Front  6.Peek Rear  7.Display  8.Exit")

        ch = int(input("Enter choice: "))

        if ch == 1:
            d.add_front(int(input("Value: ")))

        elif ch == 2:
            d.add_rear(int(input("Value: ")))

        elif ch == 3:
            print("Removed:", d.remove_front())

        elif ch == 4:
            print("Removed:", d.remove_rear())

        elif ch == 5:
            print("Front:", d.front())

        elif ch == 6:
            print("Rear:", d.rear())

        elif ch == 7:
            d.show()

        elif ch == 8:
            break

        else:
            print("Invalid choice!")
            

if __name__ == "__main__":
    main()
