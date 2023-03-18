import config from "./config";

export default {
  /**
   * 搜索歌曲
   * @param {*} musicName
   */
  searchMusic(musicName) {
    return config({
      url: `/search?keywords=${musicName}`,
      method: "get",
    });
  },
  /**
   * 获取歌曲链接
   * @param {*} musicId
   */
  getMusicUrl(musicId) {
    return config({
      url: `/song/url?id=${musicId}`,
      method: "get",
    });
  },
  /**
   * 获取封面
   * @param {*} albumId
   */
  getCoverUrl(albumId) {
    return config({
      url: `/album?id=${albumId}`,
      method: "get",
    });
  },
  /**
   * 获取评论
   * @param {*} MusicId
   */
  getCommon(MusicId) {
    return config({
      url: `/comment/hot?type=0&id=${MusicId}`,
      method: "get",
    });
  },
  /**
   * 获取视频
   * @param {*} movieId
   */
  getMovieUrl(movieId) {
    return config({
      url: `/mv/url?id=${movieId}`,
      method: "get",
    });
  },
};
