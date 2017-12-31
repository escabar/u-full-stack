class MaxSizeList(object):

    def __init__(self, size):
        self.maxsize = size
        self.mylist = []

    def push(self, value):
        self.mylist.append(value)
        if len(self.mylist) > self.maxsize:
            self.mylist.pop(0)

    def get_list(self):
        return self.mylist