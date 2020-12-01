import { shallowMount } from "@vue/test-utils";
import App from "../../src/App.vue";

// Run this once after all the tests - afterAll(fn, timeout)
describe("App.vue", () => {
  it("Should display the message 'Currently no images to display.' when there are no images returned", () => {
    // arrange
    jest.mock("axios", () => ({
      post: () => {
        Promise.resolve({
          photos: {
            page: 1,
            pages: 10,
            perpage: 100,
            total: "1000",
            photo: [],
          },
        });
      },
    }));

    // act
    var wrapper = shallowMount(App);

    // assert
    expect(wrapper.find("#no-images-text")).toBe(true);
  });

  it("Counter should be 2 when 2 image objects are returned", () => {
    // arrange
    jest.mock("axios", () => ({
      post: () => {
        Promise.resolve({
          photos: {
            page: 1,
            pages: 10,
            perpage: 100,
            total: "1000",
            photo: [
              {
                id: "1",
                owner: "foo",
                secret: "1",
                server: "1",
                farm: 1,
                title: "test",
                ispublic: 1,
                isfriend: 0,
                isfamily: 0,
              },
              {
                id: "2",
                owner: "foo",
                secret: "1",
                server: "1",
                farm: 1,
                title: "test",
                ispublic: 1,
                isfriend: 0,
                isfamily: 0,
              },
            ],
          },
        });
      },
    }));

    // act
    var wrapper = shallowMount(App);

    // assert
    expect(wrapper.vm.numberOfImages).toBe(2);
  });
});

afterAll;
